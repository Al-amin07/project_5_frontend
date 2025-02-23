import { blogCategories } from "@/components/types"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import MainForm from "@/utils/forms/MainForm"
import MainInput from "@/utils/forms/MainInput"
import MainSelect from "@/utils/forms/MainSelect"
import MainTextarea from "@/utils/forms/MainTextarea"
import { FieldValues, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { blogSchema } from "@/components/types/schema"
import { ImSpinner2 } from "react-icons/im"

export function CreateBlogModal({ handleCreate, setIsOpen, isOpen, isLoading }: { handleCreate: SubmitHandler<FieldValues>, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>, isOpen: boolean, isLoading: boolean }) {
    return (
        // <Dialog>
        //     <DialogTrigger asChild>
        //         <Button >Create Blog</Button>
        //     </DialogTrigger>
        //     <DialogContent className="sm:max-w-lg w-full">
        //         <DialogHeader>
        //             <DialogTitle>Create A Blog</DialogTitle>
        //             <DialogDescription className="sr-only">
        //                 Make changes to your profile here. Click save when you&apos;re done.
        //             </DialogDescription>
        //         </DialogHeader>
        //         <MainForm resolver={zodResolver(blogSchema)} onSubmit={handleCreate}>
        //             <div className="space-y-4 mb-4">
        //                 <MainInput name="title" label="Title" />
        //                 <MainInput name="image" label="Image URL" type="url" />
        //                 <MainSelect options={blogCategories} name="category" label="Category" />
        //                 <MainTextarea name="description" label="Description" />
        //             </div>
        //             <DialogFooter>
        //                 <Button variant={'default'} type="submit">Create Blog </Button>
        //                 <DialogClose asChild>
        //                     <Button type="button" variant={'outline'} >Cancel</Button>
        //                 </DialogClose>
        //             </DialogFooter>
        //         </MainForm>

        //     </DialogContent>
        // </Dialog>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant={'outline'} onClick={() => setIsOpen(true)}>Create Blog</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg w-full">
                <DialogHeader>
                    <DialogTitle>Create A Blog</DialogTitle>
                    <DialogDescription className="sr-only">
                        Make changes to your profile here. Click save when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>
                <MainForm resolver={zodResolver(blogSchema)} onSubmit={handleCreate}>
                    <div className="space-y-4 mb-4">
                        <MainInput name="title" label="Title" />
                        <MainInput name="image" label="Image URL" type="url" />
                        <MainSelect options={blogCategories} name="category" label="Category" />
                        <MainTextarea name="description" label="Description" />
                    </div>
                    <DialogFooter>
                        <Button disabled={isLoading} variant={"default"} type="submit">
                            Create Blog {isLoading && <ImSpinner2 size={20} className="animate-spin my-auto ml-2" />}
                        </Button>
                        <DialogClose asChild>
                            <Button type="button" variant={"outline"} onClick={() => setIsOpen(false)}>
                                Cancel
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </MainForm>
            </DialogContent>
        </Dialog>
    )
}
