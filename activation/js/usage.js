class App extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("ul", { className: "device-list" },
      this.props.data.map(device => /*#__PURE__*/React.createElement(DeviceCard, { device: device }))));


  }}


class DeviceCard extends React.Component {
  constructor() {
    super();

    this.state = {
      isToggle: false };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({ isToggle: !this.state.isToggle });
    console.log('clicked: ' + this.state.isToggle);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("li", { className: this.state.isToggle ? 'ui-card sidebar-open' : 'ui-card' }, /*#__PURE__*/
      React.createElement(Device_section__info, { data: this.props.device }), /*#__PURE__*/
      React.createElement(Device_section__sideBarMenu, null), /*#__PURE__*/
      React.createElement(Device_action__toggleMenu, { toggleClick: this.handleClick })));


  }}


class Device_section__info extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("section", { className: "content" }, /*#__PURE__*/
      React.createElement(Device_section__mastHead, { data: this.props.data }), /*#__PURE__*/
      React.createElement(Device_section__freeSpace, { data: this.props.data })));


  }}


class Device_section__sideBarMenu extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("section", { className: "sidebar" }, /*#__PURE__*/
      React.createElement("nav", null, /*#__PURE__*/
      React.createElement(Device_section__sideBarNav, null), /*#__PURE__*/
      React.createElement(Device_section__sideBarRemoveConnection, null))));



  }}


class Device_section__sideBarNav extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("ul", null, /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/
      React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("i", { className: "fa fa-wifi" }), "Wireless Settings")), /*#__PURE__*/

      React.createElement("li", null, /*#__PURE__*/
      React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("i", { className: "fa fa-info-circle" }), "Device Information")), /*#__PURE__*/

      React.createElement("li", null, /*#__PURE__*/
      React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("i", { className: "fa fa-photo" }), "Edit Photos")), /*#__PURE__*/

      React.createElement("li", null, /*#__PURE__*/
      React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("i", { className: "fa fa-video-camera" }), "Edit Video"))));



  }}


class Device_section__sideBarRemoveConnection extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("span", null, /*#__PURE__*/
      React.createElement("div", { className: "disconnect" }, /*#__PURE__*/
      React.createElement("a", { href: "#", className: "btn btn-disconnect" }, "Disconnect Device")), /*#__PURE__*/

      React.createElement("div", { className: "reauth" }, /*#__PURE__*/
      React.createElement("h3", null, "Re-enter your password"), /*#__PURE__*/
      React.createElement("input", { type: "password" }), /*#__PURE__*/
      React.createElement("p", null, /*#__PURE__*/
      React.createElement("a", { href: "#", className: "btn btn-cancel js-reAuth" }, "Cancel")))));




  }}


class Device_action__toggleMenu extends React.Component {

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "toggle" }, /*#__PURE__*/
      React.createElement("a", { href: "#", onClick: this.props.toggleClick }, /*#__PURE__*/React.createElement("i", { className: "fa fa-cog" }))));


  }}


class Device_section__mastHead extends React.Component {
  render() {
    var typeicon;
    switch (this.props.data.deviceType) {
      case 'ios':
        typeicon = 'fa fa-apple';
        break;
      case 'android':
        typeicon = 'fa fa-android';
        break;
      case 'windows':
        typeicon = 'fa fa-windows';
        break;}

    return /*#__PURE__*/(
      React.createElement("header", { className: "masthead" }, /*#__PURE__*/
      React.createElement("div", { className: "device-icon" }, /*#__PURE__*/
      React.createElement("i", { className: typeicon })), /*#__PURE__*/

      React.createElement("h1", null, this.props.data.deviceName), /*#__PURE__*/
      React.createElement("p", { className: "device-version" }, this.props.data.sysVersion)));


  }}


class Device_section__freeSpace extends React.Component {
  render() {
    const widthPhoto = Math.round((this.props.data.photoTotalSpace + this.props.data.videoTotalSpace + this.props.data.systemSpace) / this.props.data.availableSpace * 100);
    const widthVideo = Math.round((this.props.data.videoTotalSpace + this.props.data.systemSpace) / this.props.data.availableSpace * 100);
    const widthSystem = Math.round(this.props.data.systemSpace / this.props.data.availableSpace * 100);
    const usedSpacePhotoStyle = {
      width: widthPhoto + '%' };

    const usedSpaceVideoStyle = {
      width: widthVideo + '%' };

    const usedSpaceSystemStyle = {
      width: widthSystem + '%' };

    return /*#__PURE__*/(
      React.createElement("article", { className: "device-info" }, /*#__PURE__*/
      React.createElement("div", { className: "device-space" }, /*#__PURE__*/
      React.createElement("h3", null, "Storage Usage"), /*#__PURE__*/
      React.createElement("div", { className: "available-space" }, /*#__PURE__*/
      React.createElement("div", { className: "used-space--photos", style: usedSpacePhotoStyle }), /*#__PURE__*/
      React.createElement("div", { className: "used-space--videos", style: usedSpaceVideoStyle }), /*#__PURE__*/
      React.createElement("div", { className: "used-space--system", style: usedSpaceSystemStyle }))), /*#__PURE__*/


      React.createElement("ul", { className: "device-legend" }, /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("i", { className: "fa fa-circle system" }), " Apps"), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("i", { className: "fa fa-circle videos" }), " Videos"), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("i", { className: "fa fa-circle photos" }), " Photos"), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("i", { className: "fa fa-circle available" }), " Available"))));



  }}


var device_data = [{
  deviceType: 'ios',
  deviceName: 'iPhone 7 Plus',
  sysVersion: '10.3',
  availableSpace: 32768,
  photoTotalSpace: 7453,
  videoTotalSpace: 5643,
  systemSpace: 4532 },
{
  deviceType: 'android',
  deviceName: 'Nexus 7',
  sysVersion: '6.0.1',
  availableSpace: 32768,
  photoTotalSpace: 8960,
  videoTotalSpace: 2394,
  systemSpace: 4093 },
{
  deviceType: 'android',
  deviceName: 'Galaxy Note 8',
  sysVersion: '7.0.0',
  availableSpace: 32768,
  photoTotalSpace: 4534,
  videoTotalSpace: 10234,
  systemSpace: 5943 },
{
  deviceType: 'ios',
  deviceName: 'iPad Pro',
  sysVersion: '10.3',
  availableSpace: 32768,
  photoTotalSpace: 5534,
  videoTotalSpace: 12234,
  systemSpace: 3452 },
{
  deviceType: 'windows',
  deviceName: 'lumia 830',
  sysVersion: '10.0.15063',
  availableSpace: 32768,
  photoTotalSpace: 2313,
  videoTotalSpace: 4345,
  systemSpace: 4532 },
{
  deviceType: 'ios',
  deviceName: 'iPhone 6s',
  sysVersion: '10.3',
  availableSpace: 32768,
  photoTotalSpace: 4096,
  videoTotalSpace: 6144,
  systemSpace: 3072 }];


ReactDOM.render( /*#__PURE__*/
React.createElement(App, { data: device_data }),
document.getElementById('device-cards'));