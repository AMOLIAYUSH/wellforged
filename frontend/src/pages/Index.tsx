import { Suspense, lazy } from "react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import ManifestoHero from "@/components/ManifestoHero";
import Footer from "@/components/Footer";
import StickyBuyButton from "@/components/StickyBuyButton";

const TrustComparison = lazy(() => import("@/components/TrustComparison"));
const NABLVerification = lazy(() => import("@/components/NABLVerification"));
const IntegrityPillars = lazy(() => import("@/components/IntegrityPillars"));
const ProcessTimeline = lazy(() => import("@/components/ProcessTimeline"));
const TamilNaduTerroir = lazy(() => import("@/components/TamilNaduTerroir"));
const WhyWeExist = lazy(() => import("@/components/WhyWeExist"));
const VerifiedReviews = lazy(() => import("@/components/VerifiedReviews"));
const ManifestoCTA = lazy(() => import("@/components/ManifestoCTA"));

const SectionFallback = () => (
    <div className="section-padding bg-background">
        <div className="mx-auto max-w-6xl">
            <div className="premium-panel h-56 animate-pulse bg-secondary/50" />
        </div>
    </div>
);

const Index = () => {
    return (
        <>
            <SEO 
                title="WellForged | Wellness, Forged with Integrity"
                description="Most brands ask for your trust. We provide the proof. Welcome to the new standard of radical transparency in wellness."
                canonical="https://wellforged.in"
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "Website",
                    "url": "https://wellforged.in",
                    "name": "WellForged",
                    "description": "Radical transparency in wellness. Verified lab reports for every batch."
                }}
            />
            <main className="min-h-screen page-pt">
                <Navbar />
                <ManifestoHero />
                <Suspense fallback={<SectionFallback />}>
                    <TrustComparison />
                    <NABLVerification />
                    <IntegrityPillars />
                    <ProcessTimeline />
                    <TamilNaduTerroir />
                    <WhyWeExist />
                    <VerifiedReviews />
                    <ManifestoCTA />
                </Suspense>
                <Footer />
                <StickyBuyButton />
            </main>
        </>
    );
};

export default Index;
