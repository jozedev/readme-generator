import { useEffect, useMemo, useReducer, useRef } from 'react';
import { ReadmeSection } from '../types';
import { DEFAULT_SECTIONS } from '../constants/defaultSections';
import { arrayMove } from '@dnd-kit/sortable';

interface State {
    addedSections: ReadmeSection[]
    activeSection: ReadmeSection | null
}

type Action = {
    type: 'reset'
} | {
    type: 'reset_section'
    section: ReadmeSection
} | {
    type: 'add_section'
    section: ReadmeSection
} | {
    type: 'remove_section',
    sectionId: string
} | {
    type: 'set_active_section'
    section: ReadmeSection | null
} | {
    type: 'update_section_content'
    newContent: string
} | {
    type: 'add_custom_section'
    customSection: {
        name: string
        content: string
    }
} | {
    type: 'reorder_added_sections'
    from: string
    to: string
}

const INITIAL_STATE: State = {
    addedSections: [structuredClone(DEFAULT_SECTIONS[0])],
    activeSection: null
}

function reducer(state: State, action: Action): State {

    if (action.type === 'reset') {
        return structuredClone(INITIAL_STATE)
    }

    if (action.type === 'reset_section') {
        const sectionId = state.addedSections.findIndex(section => section.id === action.section.id)
        const defaultSection = DEFAULT_SECTIONS.find(section => section.id === action.section.id)

        if (sectionId === -1 || !defaultSection) {
            return state
        }

        const sectionReset = structuredClone(defaultSection)

        return {
            ...state,
            addedSections: [...state.addedSections.slice(0, sectionId), sectionReset, ...state.addedSections.slice(sectionId + 1)],
            activeSection: sectionReset
        }
    }

    if (action.type === 'add_section') {
        return {
            ...state,
            addedSections: [...state.addedSections, action.section],
            activeSection: action.section
        }
    }

    if (action.type === 'remove_section') {
        return {
            ...state,
            addedSections: state.addedSections.filter(section => section.id !== action.sectionId),
            activeSection: state.activeSection?.id === action.sectionId ? null : state.activeSection
        }
    }

    if (action.type === 'set_active_section') {
        return {
            ...state,
            activeSection: action.section
        }
    }

    if (action.type === 'update_section_content') {
        if (!state.activeSection) {
            throw Error('Trying to update section content when there is no active section.');
        }

        state.activeSection.content = action.newContent

        return {
            ...state
        }
    }

    if (action.type === 'reorder_added_sections') {
        const oldIndex = state.addedSections.findIndex(section => section.id === action.from);
        const newIndex = state.addedSections.findIndex(section => section.id === action.to);

        if (oldIndex === -1 || newIndex === -1 || oldIndex === newIndex) return state;

        const newOrderAddedSections = arrayMove(state.addedSections, oldIndex, newIndex);

        return {
            ...state,
            addedSections: newOrderAddedSections
        }
    }


    throw Error('Unknown action.');
}

const loadState = () => {
    if (localStorage.getItem("state")) {
        return JSON.parse(localStorage.getItem("state")!)
    } else {
        return structuredClone(INITIAL_STATE)
    }
}

export function useSections() {

    const ALL_SECTIONS = useRef(structuredClone(DEFAULT_SECTIONS))

    const [state, dispatch] = useReducer(reducer, loadState());

    const availableSections = useMemo(() => {
        return ALL_SECTIONS.current
            .filter(section => !state.addedSections.find(addedSection => addedSection.id === section.id))
            .sort((a, b) => a.name.localeCompare(b.name))
    }, [ALL_SECTIONS, state.addedSections])

    useEffect(() => {
        localStorage.setItem("state", JSON.stringify(state));
    }, [state])

    return {
        addedSections: state.addedSections,
        activeSection: state.activeSection,
        availableSections,
        reset: () => dispatch({ type: 'reset' }),
        resetSection: (section: ReadmeSection) => dispatch({ type: 'reset_section', section }),
        addSection: (section: ReadmeSection) => dispatch({ type: 'add_section', section }),
        removeSection: (sectionId: string) => dispatch({ type: 'remove_section', sectionId }),
        setActiveSection: (section: ReadmeSection | null) => dispatch({ type: 'set_active_section', section }),
        updateSectionContent: (newContent: string) => dispatch({ type: 'update_section_content', newContent }),
        reorderAddedSections: (from: string, to: string) => dispatch({ type: 'reorder_added_sections', from, to })
    }
}