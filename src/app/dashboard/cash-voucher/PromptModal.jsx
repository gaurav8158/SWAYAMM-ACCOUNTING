import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function PromptModal() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <button
            // onClick={handlePrompt}
            className="px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg text-black text-sm hover:bg-gray-300"
          >
            PROMPT
          </button>
          {/* <Button variant="outline">Open Dialog</Button> */}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Voucher</DialogTitle>
            {/* <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription> */}
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <label htmlFor="name-1">Amount Paid For</label>
              <input
                className="custom-input"
                id="name-1"
                name="name"
                defaultValue=""
              />
            </div>
            <div className="grid gap-3">
              <label htmlFor="username-1">Station</label>
              <input
                className="custom-input"
                id="username-1"
                name="username"
                defaultValue=""
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
