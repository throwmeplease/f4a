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
function getRepos(name) {
    return projects_old;
    // const name = fetch("/api/repos")
    // const response = fetch("/api/repos", {
    //     method: "GET",
    //     headers: {"Content-Type": "application/json" },
    //     body: JSON.stringify({ "name": name}),
    // });
    var response = { ok: true, body: "no" };
    response.ok = true;

    if (response.ok) {
        return response.body;
    } else {
        return "sorry you have no repos";
    }
}

export default function ComboboxDemo() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    const [name, setName] = React.useState("xyz");

    const projects = getRepos(name);

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
