import React, { Component } from 'react';

class Main extends Component {
    render() {
        return(
            <div>
                <Header />
                <Posts />
                <Sidebar />
                <Footer />
            </div>
        );
    }
}

export default Main;