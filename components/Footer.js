import React from 'react'

export default function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
            <div className="space-y-4 text-gray-800">
                <h5 className="font-bold">About</h5>
                <p>How AirBnB works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>AirBnB Plus</p>
                <p>AirBnB Luxe</p>
            </div>
            <div className="space-y-4 text-gray-800">
                <h5 className="font-bold">Community</h5>
                <p>This is not the real airbnb</p>
                <p>Accessiblity</p>
                <p>Kasoma Ibrahim</p>
                <p>Did you almost belive my clone</p>
                <p>Looking for cool jobs</p>
            </div>
            <div className="space-y-4 text-gray-800">
                <h5 className="font-bold">Host</h5>
                <p>To build awesome projects</p>
                <p>Front End Builds</p>
                <p>With React and Next</p>
                <p>Hosting on Firebase</p>
                <p>Tailwind CSS</p>
            </div>
            <div className="space-y-4 text-gray-800">
                <h5 className="font-bold">Tech</h5>
                <p>Server Side Rendering</p>
                <p>Static Rendering</p>
                <p>Find all the code on GitHub</p>
                <p>Cant wait to hear from you</p>
                <p>More Clones</p>
            </div>
        </div>
    )
}
