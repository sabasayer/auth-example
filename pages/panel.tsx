import { ReactElement } from "react";
import PanelLayout from "../components/panel-layout";
import { NextPageWithLayout } from "../types/layout";

const Panel:NextPageWithLayout = () => {
    return <div>Panel</div>
}

Panel.getLayout = function getLayout(page: ReactElement) {
    return (
      <PanelLayout>
        {page}
      </PanelLayout>
    )
  }

export default Panel;