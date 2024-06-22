import { DndContext, DragEndEvent, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { ReadmeSection } from '../../../types';
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { DraggableItem } from './DraggableItem';

interface Props {
    addedSections: ReadmeSection[],
    setActiveSection: (section: ReadmeSection | null) => void,
    reorderAddedSections: (from: string, to: string) => void
    removeSection: (sectionId: string) => void
    resetSection: (section: ReadmeSection) => void
}

export function DraggableSection({ addedSections, setActiveSection, reorderAddedSections, resetSection, removeSection }: Props) {

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        }),
        useSensor(TouchSensor, {
            activationConstraint: undefined
        })
    );

    const handleOnDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (!over) return;

        if (active.id !== over.id) {
            reorderAddedSections(active.id as string, over.id as string);
        }
    }

    return (
        <DndContext
            onDragEnd={handleOnDragEnd}
            sensors={sensors}>
            <SortableContext
                items={addedSections}
                strategy={verticalListSortingStrategy}>
                {
                    addedSections.length > 0 ?
                        addedSections.map(section => (
                            <DraggableItem
                                handleOnClick={() => setActiveSection(section)}
                                deleteItem={() => removeSection(section.id)}
                                key={section.id}
                                section={section}
                                resetSection={() => resetSection(section)} />
                        )) :
                        <p className='text-left font-bold italic'>No sections added</p>
                }
            </SortableContext>
        </DndContext>
    )

}