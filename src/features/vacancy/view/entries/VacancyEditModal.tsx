import React from 'react'
import { Loader, Modal } from '@/ui'
import { useStore } from 'effector-react'

import { $modalVisible, closeModal, $loading } from '../../model/private'
import { VacancyForm } from '../containers'

export const VacancyEditModal = () => {
    const loading = useStore($loading)
    const modalVisible = useStore($modalVisible)

    if (loading) {
        return <Loader />
    }
    return (
        <Modal
            visible={modalVisible}
            onClose={() => closeModal()}
        >
            <VacancyForm />
        </Modal>
    )
}