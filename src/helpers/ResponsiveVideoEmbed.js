/* A simple iframe wrapper that makes 16:9 responsive embed */
import React from 'react';
import Spinner from 'react-spinkit';

class ResponsiveVideoEmbed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    hideSpinner = () => {
        this.setState({
            loading: false
        });
    };

    render() {
        return (
            <div
                className="video container rsvp-wrapper"
                style={{
                    position: "relative",
                    background: this.props.background,
                    paddingBottom: "56.25%" /* 16:9 */,
                    paddingTop: 25,
                    height: 0
                }}
            >
                {this.state.loading ? (
                    <Spinner
                        className="loading text-center"
                        name="three-bounce"
                        color="white"
                        fadeIn="none"
                    />
                ) : null}
                <iframe
                    title="Embeded Video"
                    src={this.props.url}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
                    onLoad={this.hideSpinner}
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                />
            </div>
        );
    }
}

export default ResponsiveVideoEmbed
// export default ({url, background = "black", className = "video"}) => {
//     return (
//         <div
//             className={className}
//             style={{
//                 position: "relative",
//                 background: background,
//                 paddingBottom: "56.25%" /* 16:9 */,
//                 paddingTop: 25,
//                 height: 0
//             }}
//         >
//             <iframe
//                 title="Embeded Video"
//                 style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "100%"
//                 }}
//                 src={url}
//                 frameBorder="0"
//             />
//         </div>
//     );
// };
