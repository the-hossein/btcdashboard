import React from 'react'
import style from "./Table.module.scss"

const TableSkeleton = () => {
  return (
    <>
        <div className={style.table_skeleton_container} >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </>
  )
}

export default TableSkeleton;