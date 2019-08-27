import React from 'react';
import BScroll from 'better-scroll'
import './style.scss'
class AppScroll extends React.Component {
    scrollDOM = React.createRef();
    render() {
        let { children, className } = this.props
        return (
            <div className={`scroll-wrap ${className}`} ref={this.scrollDOM}>
                <div className="scroll-content">
                    {children}
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.scroll = new BScroll(this.scrollDOM.current, {
            scrollY: true,
            tap: true,
            click: true

        });
        //监听，当开始滚动前 重新计算高度
        this.scroll.on('beforeScrollStart', () => {
            this.scroll.refresh();
        });
    }

    scrollTo(y) {
        this.scroll.scrollTo(0, y, 200);
    }

}



export default AppScroll;