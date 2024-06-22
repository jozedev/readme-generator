import { useMemo, useState } from 'react';
import { ReadmeSection } from '../../../types';
import { Button } from '../../neobrutalism/Button';
import { Div } from '../../neobrutalism/Div';
import { Separator } from '../../neobrutalism/Separator';
import { DraggableSection } from './DraggableSection';
import { useAutoAnimate } from '@formkit/auto-animate/react';

interface Props {
    addedSections: ReadmeSection[],
    availableSections: ReadmeSection[]
    setActiveSection: (section: ReadmeSection | null) => void
    addSection: (section: ReadmeSection) => void
    reset: () => void
    reorderAddedSections: (from: string, to: string) => void
    removeSection: (sectionId: string) => void
    resetSection: (section: ReadmeSection) => void
}

type SubPanel = 'draft' | 'add'

export function SectionsPanel({ addedSections, availableSections, setActiveSection, addSection, reset,
    reorderAddedSections, resetSection, removeSection }: Props) {

    const [activeSubPanel, setActiveSubPanel] = useState<SubPanel>('draft')
    const [sectionChange] = useAutoAnimate({ duration: 350, easing: 'ease-in-out' });
    const [draftSubSection] = useAutoAnimate({ duration: 350, easing: 'ease-in-out' });
    const [addSubSection] = useAutoAnimate({ duration: 350, easing: 'ease-in-out' });
    const [filterValue, setFilterValue] = useState('');

    const filteredSections = useMemo(() => {
        return availableSections.filter(section => section.name.toLowerCase().includes(filterValue.toLowerCase() || ''))
    }, [availableSections, filterValue])

    return (
        <div className="sections w-full">
            <Div outerClassName='bg-red-500' innerClassName='px-2 h-[88vh] bg-slate-200'>
                <h3 className="text-center text-4xl font-bold my-2 mb-8 tracking-widest">
                    <b className='text-red-500 font-bold text-border text-shadow'>S</b>ections
                </h3>
                <div className='w-full flex flex-row pl-2 gap-x-3'>
                    <Button active={activeSubPanel === 'draft'} outerClassName='w-1/3 bg-red-500' innerClassName='bg-slate-200' onClick={() => setActiveSubPanel('draft')}>Draft</Button>
                    <Button active={activeSubPanel === 'add'} outerClassName='w-1/3 bg-red-500' innerClassName='bg-slate-200' onClick={() => setActiveSubPanel('add')}>Add</Button>
                    <Button outerClassName='w-1/3 bg-black' innerClassName='bg-red-500' onClick={() => {
                        setFilterValue('')
                        reset()
                    }}>Reset</Button>
                </div>
                <Separator className='my-4' />
                <div className='overflow-y-auto overflow-x-hidden w-full pl-2 h-[calc(100%-10rem)]' ref={sectionChange}>
                    {
                        activeSubPanel === 'draft' && <>
                            <p className='font-semibold'>Choose a section to edit</p>
                            <div className='pt-4 flex flex-col gap-y-6 h-[calc(100%-2rem)]' ref={draftSubSection}>
                                <DraggableSection
                                    addedSections={addedSections}
                                    setActiveSection={setActiveSection}
                                    reorderAddedSections={reorderAddedSections}
                                    resetSection={resetSection}
                                    removeSection={removeSection} />
                            </div>
                        </>
                    }
                    {
                        activeSubPanel === 'add' && <>
                            <p className='font-semibold'>Choose a section to add to your Readme</p>
                            <div className='pt-4 flex flex-col gap-y-6 h-[calc(100%-2rem)]'>
                                <div className='rounded-lg bg-black'>
                                    <input
                                        onChange={(e) => setFilterValue(e.target.value)}
                                        value={filterValue}
                                        type='text'
                                        placeholder='Search section'
                                        className='w-full rounded-md bg-slate-200 border-2 border-black font-semibold text-lg px-3 py-2 -translate-x-2 -translate-y-2 focus:outline-none focus:border-red-500'>
                                    </input>
                                </div>
                                <div className='flex flex-col gap-y-6' ref={addSubSection}>
                                    {
                                        filteredSections.map(section => (
                                            <Button key={section.id}
                                                innerClassName='bg-slate-200'
                                                outerClassName='bg-red-500'
                                                onClick={() => { addSection(section) }}>
                                                {section.name}
                                            </Button>
                                        ))
                                    }
                                </div>
                            </div>
                        </>
                    }
                </div>
            </Div>
        </div>
    );
}