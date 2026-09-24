import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { EstimateForm } from "./EstimateForm";
import { useEstimate } from "./estimate-context";

export function EstimateModal() {
  const { open, setOpen } = useEstimate();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Get your free estimate</DialogTitle>
          <DialogDescription>
            Share a few details and a design consultant will prepare an itemised quote for your home.
          </DialogDescription>
        </DialogHeader>
        <EstimateForm onDone={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
