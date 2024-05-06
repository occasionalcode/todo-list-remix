import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { Ellipsis } from "lucide-react";

type alertDialogprop = {
  icon: React.ReactNode;
  effect: () => void;
};

export function CustomAlertDialogDemo({ icon, effect }: alertDialogprop) {
  const [deletionInProgress, setDeletionInProgress] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  const startDeletionProcess = () => {
    setAlertOpen(false);

    effect();
  };

  return (
    <AlertDialog open={alertOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="border-transparent bg-transparent hover:bg-transparent m-0 p-0"
          onClick={() => setAlertOpen(true)}
        >
          {icon}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure? 🤔</AlertDialogTitle>
          <AlertDialogDescription>
            Pressing "Continue" will permanently remove this item.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setAlertOpen(false)}>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={startDeletionProcess}
            disabled={deletionInProgress}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
