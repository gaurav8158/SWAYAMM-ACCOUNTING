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
            <DialogTitle>VOUCHER</DialogTitle>
            <DialogDescription>BEING AMOUNT</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <label htmlFor="name-1">PAID FOR :</label>
              <input
                className="custom-input"
                id="name-1"
                name="name"
                defaultValue=""
              />
            </div>
            <div className="grid gap-3">
              <label htmlFor="username-1">PAID TO :</label>
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
              <Button variant="outline">CANCEL</Button>
            </DialogClose>
            <Button type="submit">SUBMIT</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
