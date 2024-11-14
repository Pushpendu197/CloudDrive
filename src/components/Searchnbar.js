import React from 'react';

function Searchnbar() {
    return (
        <div>
            <form className="form-inline">
                <input
                    className="form-control mr-sm-2 bg-white p-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onKeyDown={(e) => e.key == 'Enter' && console.log(e.target.value)}
                />
            </form>
        </div>
    );
}

export default Searchnbar;
