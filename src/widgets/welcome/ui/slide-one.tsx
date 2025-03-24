import { Logo } from "@/shared/icons"

export const SlideOne = () => {
  return (
    <div className="w-full h-full flex-shrink-0">
      <div className="h-screen w-full bg-[url('/image/slide-1.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center">
        <div className="absolute text-[#e7e4dd] pt-82">
          <div className="">
            <p className="text-[#e7e4dd] text-start text-xs mx-10">тысячи роялти фри сэмплов, миди, пресетов и fx. всё это в твоих руках. всё это на</p>
            <h1 className="text-8xl text-center font-trap">layer</h1>
            <h2 className="uppercase text-center text-[#7cc0ab] mt-6 font-trap font-extrabold">create your own sound</h2>
          </div>
          <div className="mt-4 mx-10 flex items-center gap-4">
            <p className="text-[5px]">All rights reserved. No part of this publication may be reproduced, stored in a retrieval system or transmitted, in any form or by any means, electronic, mechanical, photocopying, recording or otherwise, without permission in writing from the publisher.</p>
            <div className="min-w-5 min-h-5"><Logo/></div>
          </div>
        </div>
      </div>
    </div>
  )
}
