import { DialogContent } from "@/components/ui/dialog";

interface DialogProps {
  descricao: string;
}

export default function TreatmentsDialogData({ descricao }: DialogProps) {
  return (
    <DialogContent className="w-[90%] rounded">
      <p>{descricao}</p>
    </DialogContent>
  );
}
