import { IMAGE_LIST, MENU_ITEM } from '../../../utils/constants';
import '../templates-css/Autodrop1.css';
import '../templates-css/Autodrop3.css';
import '../templates-css/Autodrop4.css';

export default function Dropdown() {
  const handleInputChange = () => {
    const text = document.getElementsByClassName(
      'auto-dropdown3-title-input'
    )[0].value;
    const options = document.getElementsByClassName('auto-dropdown3-items-li');
    for (let i = 0; i < options.length; i++) {
      if (options[i].innerText.toLowerCase().indexOf(text) > -1) {
        options[i].style.display = 'block';
      } else {
        options[i].style.display = 'none';
      }
    }
  };
  const handleItemClick = listValue => {
    document.getElementsByClassName('auto-dropdown3-title-input')[0].value =
      listValue;
  };

  return (
    <div className="dropdown" id="dropdown">
      <p className="heading">Dropdowns</p>

      <div className="content">
        <div className="box2">
          <div className="auto-dropdown1">
            <div className="auto-dropdown1-title">
              <span>Auto-Dropdown 1</span>
              <img src={IMAGE_LIST['arrow.svg']} alt="arrow" />
            </div>
            <ul className="auto-dropdown1-items">
              {MENU_ITEM.map(item => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>
        </div>

        <div className="box2">
          <div className="auto-dropdown3">
            <div className="auto-dropdown3-title">
              <input
                className="auto-dropdown3-title-input"
                type="text"
                onInput={() => handleInputChange()}
                placeholder="Auto-Dropdown with filter"
              />
              <img src={IMAGE_LIST['arrow.svg']} alt="arrow" />
            </div>
            <ul className="auto-dropdown3-items">
              {MENU_ITEM.map(item => {
                return (
                  <li
                    className="auto-dropdown3-items-li"
                    onClick={() => handleItemClick(item)}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="box2">
          <div className="auto-dropdown4">
            <div className="auto-dropdown4-title">
              <span>Settings</span>
              <img src={IMAGE_LIST['settings.png']} alt="settings" />
            </div>
            <ul className="auto-dropdown4-items">
              <li>Setting A</li>
              <li>Setting B</li>
              <li>Setting C</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
