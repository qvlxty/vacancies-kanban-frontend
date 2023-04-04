import React from 'react'
import { Routes } from './Routes'

import './init'
import { $isApploaded, loadApp } from './features/app/model'
import { useStore } from 'effector-react'
import { Loader } from './ui'
import { ThemeProvider } from './ui/theming'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import '@/ui/theming/global.css'
import 'react-day-picker/dist/style.css'
import { GlobalStyled } from './ui/Global.css'
import { NotificationProvider } from './ui/notifications'
import { RespondentEditModal } from './features/respondent/view'
import { VacancyEditModal } from './features/vacancy/view'

export const App = () => {
    const isAppLoaded = useStore($isApploaded)
    React.useEffect(() => {
        loadApp()
    }, [])
    if (!isAppLoaded) {
        return <Loader />
    }
    return (
        <DndProvider backend={HTML5Backend}>
            <ThemeProvider>
                <>
                    <NotificationProvider />
                    <GlobalStyled />
                    <Routes />
                    <RespondentEditModal />
                    <VacancyEditModal />
                </>
            </ThemeProvider>
        </DndProvider>
    )
}
