import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';


export const ButtonHeart = ({ onBtnHeartClick, heartColor, isFavorite }) => {
  return (
    <button type="button" onClick={onBtnHeartClick}>
      {isFavorite ? (
        <AiFillHeart size={18} color="var(--blue-hover)" />
      ) : !heartColor ? (
        <AiOutlineHeart size={18} color="var(--white)" />
      ) : (
        <AiFillHeart size={18} color="var(--blue-hover)" />
      )}
    </button>
  );
};