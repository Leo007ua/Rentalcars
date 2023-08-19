import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { StyledBtn } from './ButtonStyled';


export const ButtonHeart = ({ onBtnHeartClick, heartColor, isFavorite }) => {
  return (
    <StyledBtn type="button" onClick={onBtnHeartClick}>
      {isFavorite ? (
        <AiFillHeart size={18} color="rgba(52, 112, 255, 1)" />
      ) : !heartColor ? (
        <AiOutlineHeart size={18} color="rgba(67, 63, 63, 0.8)" />
      ) : (
        <AiFillHeart size={18} color="rgba(52, 112, 255, 1)" />
      )}
    </StyledBtn>
  );
};
