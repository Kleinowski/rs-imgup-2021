import {
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w="auto" maxW="900px" maxH="600px">
        <ModalBody p={0}>
          <Image src={imgUrl} fit="cover" maxW="900px" maxH="600px" />
        </ModalBody>
        <ModalFooter
          p="10px"
          justifyContent="flex-start"
          bgColor="pGray.800"
          borderBottomLeftRadius="6px"
          borderBottomRightRadius="6px"
        >
          <Link href={imgUrl} fontSize="14px" target="_blank">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
