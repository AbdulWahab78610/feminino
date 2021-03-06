import React from "react";
import dynamic from "next/dynamic";

export default function competitions() {
  const DynamicComponent = dynamic(() => import("../../components/News"));

  return <DynamicComponent />;
}
