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
 ]
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
        if (value === ""){ throw nahi;}
    const name = value
    const response = fetch("/api/repos", {
         method: "GET",
         headers: {"Content-Type": "application/json" },
         body: JSON.stringify({ "name": name}),
     });

        var response = { ok: true, body: "no" };
    response.ok = true;

    if (response.ok) {
        console.log(response);
        return projects_old;
        return response.body;
    }}catch(e){}
        return [{value: "sorry you have no repos", label: "meh"}];
    
}

export default function ComboboxDemo() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");

    const projects = getRepos();

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? projects.find((project) => framework.value === value)
                              ?.label
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
    );
}
