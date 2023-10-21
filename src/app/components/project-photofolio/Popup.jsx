import { PHOTOFOLIO_IMAGE_LIST } from '../../../utils/constants';

export default function Popup(props) {
  return (
    <div className="popup-container">
      <img src={PHOTOFOLIO_IMAGE_LIST[props.image]} alt="" />
      <span className="popup-close" onClick={() => props.handlePopupClose()}>
        &times;
      </span>
    </div>
  );
}
