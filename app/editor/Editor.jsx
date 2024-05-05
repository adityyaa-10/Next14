"use client";
import React, { useState, useEffect, useRef } from "react";
export default function Editor() {
    const [isMounted, setIsMounted] = useState(false);
    const ref = useRef();

    const initializeEditor = async () => {
        const EditorJS = (await import("@editorjs/editorjs")).default
        const List = (await import("@editorjs/list")).default
        const Quote = (await import("@editorjs/quote")).default
        const InlineCode = (await import("@editorjs/inline-code")).default
        const Code = (await import("@editorjs/code")).default
        const Marker = (await import("@editorjs/marker")).default
        const CheckList = (await import("@editorjs/checklist")).default
        const Delimiter = (await import("@editorjs/delimiter")).default
        const Table = (await import("@editorjs/table")).default
        if (ref.current) {
            const editor = new EditorJS({
                holder: ref.current,
                placeholder: 'Post Description',
                tools: {
                    list: {
                        class: List,
                        inlineToolbar: true,
                        placeholder: 'Type / for commands',
                    },
                    quote: {
                        class: Quote,
                        inlineToolbar: true,
                        config: {
                            quotePlaceholder: 'Enter a quote',
                            captionPlaceholder: 'Quote attribution',
                        },
                        placeholder: 'Type / for commands',
                    },
                    inlineCode: {
                        class: InlineCode,
                        placeholder: 'Type / for commands',
                        inlineToolbar: true,
                    },
                    code: {
                        class: Code,
                        placeholder: 'Enter your code here',
                        inlineToolbar: true,
                    },
                    marker: {
                        class: Marker,
                        inlineToolbar: true,
                        placeholder: 'Type / for commands'
                    },
                    checklist: {
                        class: CheckList,
                        inlineToolbar: true,
                    },
                    delimiter: Delimiter,
                    table: {
                        class: Table,
                        inlineToolbar: true,
                        config: {
                            rows: 2,
                            cols: 3,
                        },
                        placeholder: 'Type / for commands',
                    }
                }
            });
            ref.current = editor
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsMounted(true);
        }
    }, [])

    useEffect(() => {
        const init = async () => {
            await initializeEditor();
        };

        if (isMounted) {
            init();

            return () => {
                if (ref.current) {
                    ref.current.destroy();
                }
            }
        }
    }, [isMounted])

    // const save = () => {
    //     if (ref.current) {
    //         ref.current.save().then((outputData) => {
    //             console.log(outputData)
    //         })
    //     }
    // }

    return (
        <>
            <div ref={ref} className="" />
            {/* <button onClick={save}>Save</button> */}
        </>
    )

};