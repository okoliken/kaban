import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogOverlay
  } from "@/components/ui/dialog";
  import { useCallback } from "react";
  
  export const Modal = ({
    children,
    isOpen,
    onClose,
  }: React.PropsWithChildren<{
    isOpen: boolean;
    onClose: () => void;
  }>) => {
    
    // Handler to close modal when clicking outside the content
    const handleOverlayClick = useCallback((e: React.MouseEvent) => {
      e.stopPropagation();
      onClose();
    }, [onClose]);
  
    return (
      <Dialog open={isOpen}>
        <DialogOverlay 
          className="!bg-black/50" 
          onClick={handleOverlayClick} // Close on clicking overlay
        />
        <DialogContent 
          className="bg-white p-4" 
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside content
        >
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    );
  };
  