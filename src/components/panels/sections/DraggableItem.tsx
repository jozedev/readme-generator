import { defaultAnimateLayoutChanges, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical } from '../../icons/GripVertical';
import { ReadmeSection } from '../../../types';
import { Trash } from '../../icons/Trash';
import { Refresh } from '../../icons/Refresh';

interface Props {
    section: ReadmeSection
    handleOnClick: () => void
    deleteItem: () => void
    resetSection: () => void
}
const animateLayoutChanges = (args: any) =>
    args.isSorting || args.wasDragging ? defaultAnimateLayoutChanges(args) : true;

export function DraggableItem({ section, handleOnClick, resetSection, deleteItem }: Props) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({
        animateLayoutChanges,
        id: section.id
    });

    const style = {
        transform: CSS.Translate.toString(transform),
        transition
    };

    return (
        <div
            ref={setNodeRef}
            key={section.id}
            className='rounded-md bg-red-500'
            style={style}
            {...attributes}
        >
            <span className='w-full bg-slate-200 flex flex-row justify-between items-center
            -translate-x-2 -translate-y-2 rounded-md border-2 border-black font-semibold
            text-lg hover:-translate-y-3 active:translate-x-0 active:translate-y-0 
            transition-all'>

                <button {...listeners} className='px-2 py-2 flex-none'><span><GripVertical className='w-6 h-6 hover:text-red-500 hover:scale-110' /></span></button>
                <button
                    className='font-semibold py-2 grow'
                    onClick={handleOnClick}>{section.name}</button>
                <div className='flex-none'>
                    <button className='px-1 py-2 hover:text-red-500' title='Reset section content to default' onClick={resetSection}><span><Refresh className='w-6 h-6 hover:scale-110' /></span></button>
                    <button className='px-1 py-2 hover:text-red-500' title='Remove section' onClick={deleteItem}><span><Trash className='w-6 h-6 hover:scale-110' /></span></button>
                </div>
            </span>
        </div>
    );
}