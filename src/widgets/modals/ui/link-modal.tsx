import { ModalText } from "@/entities/modal/ui/modal-text";
import { setLinkModal } from "@/entities/modals/model/slice";
import { Modal, ModalButton } from "@/shared/ui";
import { useDispatch } from "react-redux";

export const LinkModal = () => {
  const dispatch = useDispatch();

  const close = () => {
    dispatch(setLinkModal(false));
  }

  return (
    <Modal close={close}>
      <ModalText cl={"mb-6"}>
        Ссылка скопирована, отправьте ее другу, когда он откроет приложение вы 
        получите n кредитов, за которые вы сможете скачать понравившиеся сэмплы
      </ModalText>
      <ModalButton onClick={close} name={"отлично!"}></ModalButton>
    </Modal>
  )
}
