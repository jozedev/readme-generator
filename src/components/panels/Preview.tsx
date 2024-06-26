import ReactMarkdown from 'react-markdown'
import { ReadmeSection } from '../../types';
import { Div } from '../neobrutalism/Div';
import remarkGfm from 'remark-gfm'
import { FileDownload } from '../icons/FileDownload';
import { Button } from '../neobrutalism/Button';

interface Props {
    addedSections: ReadmeSection[]
}

export function Preview({ addedSections }: Props) {
    const markdown = addedSections.map((section) => section.content).join('\n')

    const download = () => {
        const blob = new Blob([markdown], { type: 'text/plain' })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = 'README.md'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
    }

    return (
        <div className="preview w-full h-full">
            <Div outerClassName='bg-green-500' innerClassName='h-[88vh] pr-4 bg-slate-200'>
                <h3 className="text-center font-bold text-4xl my-4 mb-8 tracking-widest">
                    <b className='text-green-500 font-bold text-border text-shadow'>P</b>review
                </h3>
                {
                    addedSections.length === 0
                        ?
                        <div className='flex flex-col justify-center items-center w-full h-4/5'>
                            <p className='font-semibold'>Nothing to preview yet</p>
                        </div>
                        :
                        <>
                            <ReactMarkdown
                                className={'markdown h-[calc(100%-10rem)] overflow-y-scroll'}
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    a: props => <a {...props} target="_blank" rel="noreferrer" />
                                }}
                            >
                                {markdown}
                            </ReactMarkdown>
                            <div className='w-full flex flex-row pl-2 gap-x-3 my-4'>
                                <Button
                                    onClick={download}
                                    outerClassName='mx-auto bg-black' innerClassName='flex flex-row items-center gap-2 bg-green-500'>
                                    <FileDownload className='w-8 h-8' />
                                    <span>Download</span>
                                </Button>
                            </div>
                        </>
                }
            </Div>
        </div>
    );
}