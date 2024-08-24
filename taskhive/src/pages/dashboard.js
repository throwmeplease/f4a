"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

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
function getRepos() {
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
        const response = fetch("/api/repos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: name }),
        });

        var response = { ok: true, body: "no" };
        response.ok = true;

        console.log(response)
        if (response.ok) {
            console.log(response);
            return response.body.repos;
        }
    } catch (e) {}
    return [
        { value: "sorry you have no repos", label: "meh" },
        { value: "error", label: "chal chod" },
    ];
}

function GetButton() {
    return (
        <>
            <Dialog>
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently
                            delete your account and remove your data from our
                            servers.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    );
}
// function Projects({ open, setOpen }, {value, setValue}, {projects}) {
//  return (

export default function ComboboxDemo() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    // const [projects, setProjects] = React.useState(getRepos());
    const projects = getRepos();

    return (
        <main
            className={`bg-white flex min-h-screen flex-col items-center justify-evenly p-24 `}
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
                                      (project) => framework.value === value
                                  )?.label
                                : "Select project..."}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                        <Command>
                            <CommandInput placeholder="Search project..." />
                            <CommandList>
                                <CommandEmpty>No project found.</CommandEmpty>
                                <CommandGroup>
                                    {projects.map((project) => (
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
            <div>
                <GetButton />
            </div>
        </main>
    );
}
