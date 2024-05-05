'use client';
import EditorJS from "@editorjs/editorjs";
import classes from './editorjs.module.css';
import { useEffect, useRef } from "react";
import { EDITOR_CONFIG } from "@/editorjs.config";

const Editor = ({ value, onChange, holder }) => {

    const ref = useRef();

    useEffect(() => {

        if (!ref.current) {
            const editor = new EditorJS({
                holder: holder,
                tools: EDITOR_CONFIG,
                placeholder: 'Post Description',
                data: value,
                async onChange(api, event) {
                    const data = await api.saver.save();
                    onChange(data);
                },
                i18n: {
                    toolNames: {
                        Hyperlink: 'Link'
                    },
                    tools: {
                        hyperlink: {
                            Save: 'Salvar',
                            'Select target': 'Seleziona destinazione',
                            'Select rel': 'Wählen rel'
                        }
                    }
                }
            })

            ref.current = editor;
        }

        return () => {
            if (ref.current && ref.current.destroy) {
                ref.current.destroy();
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div id={holder} className={`${classes.editorjs} leading-3`} py={4} />
    )
}


export default Editor;