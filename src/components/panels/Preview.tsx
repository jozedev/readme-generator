import ReactMarkdown from 'react-markdown'
import type { ExtraProps } from 'react-markdown'
import { ReadmeSection } from '../../types';
import { Div } from '../neobrutalism/Div';
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { FileDownload } from '../icons/FileDownload';
import { Separator } from '../neobrutalism/Separator';
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
            <Div mainColor='slate-200' backgroundColor='green-500' innerClassName='h-[88vh] pr-4'>
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
                                rehypePlugins={[rehypeRaw]}
                                components={{
                                    code({ className, children, ...props }) {
                                        const match = /language-(\w+)/.exec(className || '')
                                        return match ? (
                                            <SyntaxHighlighter
                                                PreTag="div"
                                                language={match[1]}
                                                {...(props as ExtraProps)}
                                                style={dracula}
                                            >
                                                {String(children).replace(/\n$/, '')}
                                            </SyntaxHighlighter>
                                        ) : (
                                            <code className={className} {...props}>
                                                {children}
                                            </code>
                                        )
                                    },
                                    a: props => <a {...props} target="_blank" rel="noreferrer" />
                                }}
                            >
                                {markdown}
                            </ReactMarkdown>
                            <div className='w-full flex flex-row pl-2 gap-x-3 my-4'>
                                <Button
                                    onClick={download}
                                    outerClassName='mx-auto' backgroundColor='black' mainColor='green-500' innerClassName='flex flex-row items-center gap-2'>
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