import { Editor, Monaco } from '@monaco-editor/react';
import { ReadmeSection } from '../../types';
import { Div } from '../neobrutalism/Div';

interface Props {
    activeSection: ReadmeSection | null;
    updateSectionContent: (newContent: string) => void;
}

export function EditorSection({ activeSection, updateSectionContent }: Readonly<Props>) {

    const handleEditorChange = (value: string | undefined) => {
        if (!value) return
        updateSectionContent(value)
    }

    function setEditorTheme(monaco: Monaco) {
        monaco.editor.defineTheme('onedark', {
            base: 'vs-dark',
            inherit: true,
            rules: [
                {
                    token: 'comment',
                    foreground: '#5d7988',
                    fontStyle: 'italic'
                },
                { token: 'constant', foreground: '#e06c75' }
            ],
            colors: {
                'editor.background': '#21252b'
            }
        });
    }

    return (
        <div className="editor w-full h-full">
            <Div mainColor='slate-200' backgroundColor='blue-500' innerClassName='h-[88vh] overflow-y-scroll pr-4'>
                <h3 className="text-center text-4xl font-bold my-4 mb-8 tracking-widest">
                    <b className='text-blue-500 font-bold text-border text-shadow'>E</b>ditor
                </h3>
                {
                    activeSection ? <Editor
                        beforeMount={setEditorTheme}
                        height="85%"
                        defaultLanguage="text"
                        defaultValue="// some comment"
                        theme="onedark"
                        options={{
                            minimap: {
                                enabled: false,
                            },
                            fontSize: 18,
                            cursorStyle: 'block',
                            wordWrap: 'on',
                            lineNumbers: 'off',
                        }}
                        value={activeSection?.content}
                        onChange={handleEditorChange} /> :

                        <div className='flex flex-col justify-center items-center w-full h-4/5'>
                            <p className='font-semibold'>Choose a section from the draft panel to edit the content</p>
                        </div>
                }

            </Div>
        </div>
    );
}