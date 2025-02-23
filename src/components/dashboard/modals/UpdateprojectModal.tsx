/* eslint-disable @typescript-eslint/no-explicit-any */



import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import MainForm from "@/utils/forms/MainForm"
import MainInput from "@/utils/forms/MainInput"

import MainTextarea from "@/utils/forms/MainTextarea"
import { FieldValues, SubmitHandler } from "react-hook-form"

export function UpdateProjectModal({ handleUpdate, defaultValue }: { handleUpdate: SubmitHandler<FieldValues>, defaultValue: any }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>Update Project</DialogTitle>

                </DialogHeader>
                <MainForm defaultValues={defaultValue} onSubmit={handleUpdate}  >
                    <div className="space-y-3">
                        <MainInput name="name" label="Name" />
                        <MainInput name="image" label="Image" />
                        <MainInput name="liveUrl" type="url" label="live Link" />

                        <MainTextarea name="description" label="Description" />
                    </div>
                    <DialogFooter className="sm:justify-end mt-5">
                        <DialogClose asChild>
                            <Button type="submit" variant="default">
                                Update
                            </Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button type="button" variant="outline">
                                Close
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </MainForm>

            </DialogContent>
        </Dialog>
    )
}
