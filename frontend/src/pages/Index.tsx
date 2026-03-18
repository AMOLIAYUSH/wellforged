import { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
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
            <Helmet>
                <title>WellForged | Wellness, Forged with Integrity</title>
                <meta name="description" content="Most brands ask for your trust. We provide the proof. Welcome to the new standard of radical transparency in wellness." />
                <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </Helmet>
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
