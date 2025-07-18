import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold mb-4">¡Oops! Algo salió mal</h2>
        <p className="text-muted-foreground mb-4">
          Ha ocurrido un error inesperado. Por favor, recarga la página.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="btn-primary px-6 py-3 rounded-lg"
        >
          Recargar página
        </button>
        <details className="mt-4 text-left">
          <summary className="cursor-pointer text-sm text-muted-foreground">
            Detalles del error
          </summary>
          <pre className="mt-2 text-xs bg-muted p-2 rounded overflow-auto">
            {error.message}
          </pre>
        </details>
      </div>
    </div>
  );
}

const App = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
