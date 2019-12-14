import React, { FC } from "react"
import cn from "classnames"
import styles from "./hudbar.module.css"
import { useSelector } from "react-redux"
import { getCurrentCard } from "../../state/game/game.selectors"
import Card from "../card"

interface HudbarProps {
  className?: string
}

const Hudbar: FC<HudbarProps> = ({ className }) => {
  const card = useSelector(getCurrentCard)
  return (
    <div className={cn(styles.component, className)}>
      <div className={styles.task}>
        <span>{"Aufgabe"}</span>
        <span>{"Ordne die Produktkarte der richtigen Zielgruppe zu."}</span>
      </div>
      {card && (
        <div className={styles.card}>
          <Card data={card} />
        </div>
      )}
    </div>
  )
}

export default Hudbar
