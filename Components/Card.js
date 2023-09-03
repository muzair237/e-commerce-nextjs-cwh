import React from 'react'
import Image from "next/image"
import Link from "next/link"


export default function Card(props) {
    return (
        <>
            <div className="card border-info" style={{ width: "22rem" }}>
                <Image className="mx-auto" src={props.image} width={200} height={200} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{props.description}</h6>
                    <p className="card-text text-dark">{props.price}</p>
                    <Link href={`/products/${props.title}`} className="btn btn-primary">Buy Now</Link>
                </div>
            </div>
        </>
    )
}
