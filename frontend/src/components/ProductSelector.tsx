import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, ShoppingBag, Truck, Shield, FlaskConical, AlertCircle, Check, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import { API_BASE_URL } from "@/config";
import productImage from "@/assets/Packaging_Updated.png";

interface SKU {
  id: string;
  size: string;
  price: number;
  originalPrice?: number;
  label?: string;
  stock?: number;
}

const ProductSelector = ({ product }: { product: any }) => {
  const [selectedSku, setSelectedSku] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product?.variants?.length > 0) {
      setSelectedSku(product.variants[0]);
    }
    setQuantity(1);
  }, [product]);

  const { addItem, totalItems, setIsOpen } = useCart();
  const { isLoggedIn, setPendingCartAction, setRedirectUrl } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    if (!selectedSku) return;

    if (selectedSku.stock !== undefined && selectedSku.stock <= 0) {
      toast.error("This size is currently out of stock");
      return;
    }

    await addItem({
      id: selectedSku.id.toString(),
      name: product.name,
      size: selectedSku.label,
      price: selectedSku.price,
      originalPrice: selectedSku.original_price,
      image: product.images?.[0]?.image_url || productImage
    }, quantity);

    toast.success(`Added ${quantity} ${selectedSku.label} to cart`);
  };

  if (!product || !selectedSku) return null;

  return (
    <div className="space-y-[var(--space-md)]">
      <div className="space-y-[var(--space-xs)]">
        <label className="font-body text-[var(--text-sm)] font-medium text-foreground uppercase tracking-widest">Select Size</label>
        <div className="grid grid-cols-2 gap-[var(--space-xs)]">
          {product.variants.map((sku: any) => (
            <button
              key={sku.id}
              onClick={() => setSelectedSku(sku)}
              className={`relative p-3 sm:p-4 rounded-xl border-2 transition-all duration-200 text-left min-h-[44px] ${selectedSku.id === sku.id ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/50"
                } ${sku.stock === 0 ? "opacity-60 grayscale-[0.5]" : ""}`}
            >
              <div className="font-display font-semibold text-foreground" style={{ fontSize: "var(--text-base)" }}>{sku.label}</div>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-display font-bold text-primary" style={{ fontSize: "var(--text-lg)" }}>₹{sku.price}</span>
                {sku.original_price && <span className="font-body text-muted-foreground line-through" style={{ fontSize: "var(--text-xs)" }}>₹{sku.original_price}</span>}
              </div>

              {/* Stock Status */}
              <div className="mt-2">
                {sku.stock === 0 ? (
                  <span className="text-[10px] sm:text-xs font-bold text-destructive uppercase tracking-wider flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" /> Out of Stock
                  </span>
                ) : sku.stock < 20 ? (
                  <span className="text-[10px] sm:text-xs font-bold text-gold uppercase tracking-wider flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" /> Only {sku.stock} left
                  </span>
                ) : (
                  <span className="text-[10px] sm:text-xs font-medium text-primary uppercase tracking-wider">In Stock</span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
      {/* Quantity & Add to Cart */}
      <div className="space-y-[var(--space-md)] pt-[var(--space-md)]">
        <div className="flex items-center gap-[var(--space-md)]">
          <div className="flex items-center rounded-xl border-2 border-border bg-card p-1">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
              disabled={quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-10 text-center font-display font-bold text-[var(--text-lg)]">{quantity}</span>
            <button
              onClick={() => setQuantity(Math.min(selectedSku.stock || 99, quantity + 1))}
              className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
              disabled={quantity >= (selectedSku.stock || 99)}
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <Button
            variant="hero"
            size="xl"
            className="flex-1 h-[var(--space-xl)] gap-2 font-bold uppercase tracking-widest text-primary-foreground"
            onClick={handleAddToCart}
            disabled={selectedSku.stock === 0}
          >
            {selectedSku.stock === 0 ? (
              "Out of Stock"
            ) : (
              <><ShoppingCart className="h-4 w-4" /> Add to Cart</>
            )}
          </Button>
        </div>
        {totalItems > 0 && (
          <Button variant="outline" size="xl" className="w-full h-[var(--space-xl)] gap-2 text-[var(--text-base)] font-bold uppercase tracking-widest hover:bg-primary/5 hover:text-primary hover:border-primary/30 transition-all duration-300" onClick={() => setIsOpen(true)}>
            <ShoppingBag className="h-4 w-4" /> Go to Cart ({totalItems})
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductSelector;
