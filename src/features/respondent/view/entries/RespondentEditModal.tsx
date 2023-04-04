import { Loader, Modal, TabBar } from '@/ui'
import { useStore } from 'effector-react'
import React from 'react'

import { $modalVisible, closeModal, $loading } from '../../model/private'
import { RespondentForm } from '../containers'
import { RespondentCV } from '../containers/RespondentCV'
import { RespondentFeedback } from '../containers/RespondentFeedback'
import { respondentForm } from '../../model/forms'

export const RespondentEditModal = () => {
    const loading = useStore($loading)
    const modalVisible = useStore($modalVisible)
    const [tab, setTab] = React.useState<'general' | 'CV' | 'description'>('general')

    if (loading) {
        return <Loader />
    }
    return (
        <Modal
            size={'lg'}
            visible={modalVisible}
            onClose={() => respondentForm.submit()}
        >
            <TabBar
                options={[
                    { text: 'Главное', value: 'general', icon: 'doc' },
                    { text: 'CV/Резюме', value: 'CV', icon: 'list' },
                    { text: 'Вердикт/Фидбек', value: 'description', icon: 'feedback' },
                ]}
                onSet={setTab}
                selected={tab}
            />
            {tab === 'general' && (
                <RespondentForm />
            )}
            {tab === 'CV' && (
                <RespondentCV />
            )}
            {tab === 'description' && (
                <RespondentFeedback />
            )}
        </Modal>
    )
}