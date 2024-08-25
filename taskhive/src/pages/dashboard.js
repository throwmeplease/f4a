"use client";

import { UploadButton } from "/src/utils/uploadthing";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";


const button_css = 'mx-5 my-30 min-w-48 max-w-48'; 

const projects_old = [
    {
        value: "next.js",
        label: "Next.js",
    },
    {
        value: "sveltekit",
        label: "SvelteKit",
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js",
    },
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
    },
];

function Home() {
    return (
        <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
                // Do something with the response
                console.log("Files: ", res);
                alert("Upload Completed");
            }}
            onUploadError={(error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
            }}
        />
    );
}

async function getRepos() {
    // return projects_old;
    // const name = fetch("/api/repos")
    // const response = fetch("/api/repos", {
    //     method: "GET",
    //     headers: {"Content-Type": "application/json" },
    //     body: JSON.stringify({ "name": name}),
    // });
    try {
        let value = localStorage.getItem("Name") || "";
        if (value === "") {
            throw nahi;
        }
        const name = value;
        const response = await fetch("/api/repos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: name }),
        });
        if (response.ok) {
            const json = await response.json();
            if (response.status === 200) {
                console.log(json.repos);
                return json.repos;
            }
        }
    } catch (e) {}
    return [
        { value: "sorry you have no repos", label: "meh" },
        { value: "error", label: "chal chod" },
    ];
}

function EditProject() {
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className={button_css}>Edit Project</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit Project</DialogTitle>
                        <DialogDescription>
                            Make changes to your Project here. Click save when
                            you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input
                                id="name"
                                defaultValue="Group 1 PPT"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="text" className="text-right">
                                Username
                            </Label>
                            <Input
                                id="description"
                                defaultValue="group 1's social sciences power point presentation"
                                className="col-span-3 row-span-4"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>{" "}
        </>
    );
}
// function Projects({ open, setOpen }, {value, setValue}, {projects}) {
//  return (

function DeleteProject() {
    return (
        <Dialog>
            <DialogTrigger>
                <Button className={button_css}>Delete</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete your Project and remove it's data from our
                        servers.
                    </DialogDescription>
                    // add button
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

function NewProject() {
    return (
        <Dialog>
            <DialogTrigger>
                <Button className={button_css}>New Project</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>New Project</DialogTitle>
                    <DialogDescription>
                        Enter the details of your Project. Click save when
                        you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input
                            id="name"
                            defaultValue="Group 1 PPT"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="text" className="text-right">
                            Username
                        </Label>
                        <Input
                            id="description"
                            defaultValue="group 1's social sciences power point presentation"
                            className="col-span-3 row-span-4"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default function ComboboxDemo() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    // const [projects, setProjects] = React.useState(getRepos());
    var projects = React.useEffect(() => {
        return getRepos();
    });
    console.log(projects);
    // if (!projects.map) {
    //     projects = projects_old
    // }

    //async function handleSubmit(event) {
    //    event.preventDefault();
    //
    //    const formData = new FormData(event.currentTarget);
    //    //const name = formData.get("file");
    //    const value = localStorage.getItem("Name") || "";
    //
    //    const response = await fetch("/api/upload", {
    //        method: "POST",
    //        headers: { "Content-Type": "application/zip" },
    //        body: formData,
    //    });
    //    console.log(response);
    //}

    return (
        <main
            className={
                "bg-gradient-to-b from-purple-900 via-purple-800 to-black flex min-h-screen flex-row items-center justify-between p-42"
            }
        >
            <div
                className={`bg-white flex min-h-screen flex-col items-center justify-evenly p-32 `}
            >
                <div>
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={open}
                                className="w-[200px] justify-between"
                            >
                                {value
                                    ? projects.find(
                                          (project) => project.value === value
                                      )?.label
                                    : "Select project..."}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                            <Command>
                                <CommandInput placeholder="Search project..." />
                                <CommandList>
                                    <CommandEmpty>
                                        No project found.
                                    </CommandEmpty>
                                    <CommandGroup>
                                        {projects?.map((project) => (
                                            <CommandItem
                                                key={project.value}
                                                value={project.value}
                                                onSelect={(currentValue) => {
                                                    setValue(
                                                        currentValue === value
                                                            ? ""
                                                            : currentValue
                                                    );
                                                    setOpen(false);
                                                }}
                                            >
                                                <Check
                                                    className={cn(
                                                        "mr-2 h-4 w-4",
                                                        value === project.value
                                                            ? "opacity-100"
                                                            : "opacity-0"
                                                    )}
                                                />
                                                {project.label}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                </div>
                <div
                    className={
                        "flex flex-col items-center justify-between p-28"
                    }
                >
                    <EditProject />
                    <NewProject />
                    <DeleteProject />
                </div>
            </div>
            <div
                className={
                    "w-max text-black flex min-h-screen flex-col items-center justify-between p-48"
                }
            >
                <form
                    method="post"
                    enctype="multipart/form-data"
                    action="api/fileupload"
                >
                    <Input
                        id="filelelo"
                        type="file"
                        accept=".zip"
                        name="filetoupload"
        className={'min-w-48 max-w-48'}
                    />
                    <Button className={'min-w-48 max-w-48'} id="filelelo" type="submit">
                        {" "}
                        Submit{" "}
                    </Button>
                </form>{" "}
                {/*    <Home />  */}
            </div>
        </main>
    );
}
