import { ModalText } from "@/entities/modal/ui/modal-text";
import { setToTryModal } from "@/entities/modals/model/slice";
import { soundSelector } from "@/entities/sound/model/selector";
import { PlusIcon } from "@/shared/icons";
import { Modal, ModalButton } from "@/shared/ui";
import { useNavigate } from "@tanstack/react-router";
import { useDispatch, useSelector } from "react-redux";

export const ToTryModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { pack } = useSelector(soundSelector);
  
  const close = () => {
    dispatch(setToTryModal(false));
  }

  return (
    <Modal close={close}>
      <ModalText cl={"mb-6"}>
        Оформите пробную подписку и получите доступ к скачиванию сэмплов:
        <div className="mt-4">
          <p>{pack?.Name}</p>
          <p>{pack?.Genre}</p>
          <p>{pack?.Autor}</p>
        </div>
      </ModalText>
      <ModalButton onClick={() => navigate({ to: '/subscribe' })} icon={<PlusIcon />} name={"оформить подписку!"}></ModalButton>
    </Modal>
  )
}
