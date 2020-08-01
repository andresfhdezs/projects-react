import React, { Component } from 'react'

class ModalDialog extends Component {
    constructor() {
        super();
        this.modalHandler = (e) => {
            this.setState({
                data: e.detail.data,
                visible: true
            });
        };
        this.state = {
            data: {
                title: '',
                closeOnClick: false,
                content: ''
            },
            visible: false
        };
        this.close = this.close.bind(this);
        this.modalClick = this.modalClick.bind(this);
    }
    render() {
        return !this.state.visible ? null : <div className="modal" onClick={this.modalClick}>
            <div className="dialog">
                <div className="dialog-title">{this.state.data.title}<span className="dialog-close" onClick={this.close}>+</span></div>
                <div className="dialog-content">
                    {
                        this.state.data.content
                    }
                </div>
            </div>
        </div>
    }
    componentDidMount() {
        document.addEventListener('modal', this.modalHandler);
    }
    componentWillUnmount() {
        document.removeEventListener('modal', this.modalHandler);
    }
    close() {
        this.setState({
            visible: false,
            data: {
                title: '',
                closeOnClick: false,
                content: ''
            }
        });
    }
    static show(data) {
        document.dispatchEvent(new CustomEvent('modal', {
            detail: {
                data
            }
        }));
    }
    modalClick() {
        if (this.state.data.closeOnClick) this.close();
    }
}

export default ModalDialog

// // add to render function
// <ModalDialog />

// // every time you wanna call the dialog
// // content is a jsx element
// ModalDialog.show({
//   title: 'Hello, world!',
//   closeOnClick: true,
//   content: <img src="https://github.com/30-seconds/30-seconds-of-react/blob/master/logo.png"/>
// });  