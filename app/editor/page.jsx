"use client"
import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import { EditorProvider, useCurrentEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React, { useState } from 'react';
import { BiBold, BiItalic, BiStrikethrough, BiCode, BiListUl, BiListOl, BiUndo, BiRedo, BiPalette } from 'react-icons/bi';

const MenuBar = () => {
    const { editor } = useCurrentEditor();
    const [colorPickerOpen, setColorPickerOpen] = useState(false);

    if (!editor) {
        return null;
    }

    const toggleColorPicker = () => {
        setColorPickerOpen(!colorPickerOpen);
    };

    const applyColor = (color) => {
        editor.chain().focus().setColor(color).run();
        setColorPickerOpen(false);
    };

    return (
        <div className="flex items-center justify-between border-b pb-2 mb-4">
            {/* Icon Buttons */}
            <div className="flex space-x-2">
                {/* Bold */}
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={!editor.can().chain().focus().toggleBold().run()}
                    className={`text-gray-500 hover:text-blue-600`}
                >
                    <BiBold className="h-5 w-5" />
                </button>

                {/* Italic */}
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={!editor.can().chain().focus().toggleItalic().run()}
                    className={`text-gray-500 hover:text-blue-600`}
                >
                    <BiItalic className="h-5 w-5" />
                </button>

                {/* Strikethrough */}
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={!editor.can().chain().focus().toggleStrike().run()}
                    className={`text-gray-500 hover:text-blue-600`}
                >
                    <BiStrikethrough className="h-5 w-5" />
                </button>

                {/* Code */}
                <button
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    disabled={!editor.can().chain().focus().toggleCode().run()}
                    className={`text-gray-500 hover:text-blue-600`}
                >
                    <BiCode className="h-5 w-5" />
                </button>

                {/* List (Bullet) */}
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    disabled={!editor.can().chain().focus().toggleBulletList().run()}
                    className={`text-gray-500 hover:text-blue-600`}
                >
                    <BiListUl className="h-5 w-5" />
                </button>

                {/* List (Ordered) */}
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    disabled={!editor.can().chain().focus().toggleOrderedList().run()}
                    className={`text-gray-500 hover:text-blue-600`}
                >
                    <BiListOl className="h-5 w-5" />
                </button>

                {/* Undo */}
                <button
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={!editor.can().chain().focus().undo().run()}
                    className="text-gray-500 hover:text-blue-600"
                >
                    <BiUndo className="h-5 w-5" />
                </button>

                {/* Redo */}
                <button
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editor.can().chain().focus().redo().run()}
                    className="text-gray-500 hover:text-blue-600"
                >
                    <BiRedo className="h-5 w-5" />
                </button>
            </div>

            {/* Color Picker (Popover) */}
            <div className="relative">
                <button
                    onClick={toggleColorPicker}
                    className="flex items-center p-1 rounded hover:bg-gray-100 focus:outline-none"
                >
                    <BiPalette className="h-5 w-5" />
                </button>
                {colorPickerOpen && (
                    <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg overflow-hidden">
                        {/* Color options */}
                        <div className="flex space-x-2 p-2">
                            {/* Example color options */}
                            <div
                                className="w-6 h-6 rounded-full bg-purple-500 cursor-pointer"
                                onClick={() => applyColor('#958DF1')}
                            ></div>
                            {/* Add more color options here */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const extensions = [
    Color.configure({ types: [TextStyle.name, ListItem.name] }),
    TextStyle.configure({ types: [ListItem.name] }),
    StarterKit.configure({
        bulletList: {
            keepMarks: true,
            keepAttributes: true,
        },
        orderedList: {
            keepMarks: true,
            keepAttributes: true,
        },
    }),
];

const content = `
<h2>Start Typing</h2>
`;

const RichTextEditor = () => {
    return (
        <div className="max-w-3xl mx-auto p-4 border rounded-lg shadow-lg bg-white">
            <EditorProvider slotBefore={<MenuBar />} extensions={extensions} content={content} />
        </div>
    );
};

export default RichTextEditor;