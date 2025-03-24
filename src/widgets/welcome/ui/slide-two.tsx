import { Logo } from "@/shared/icons"

export const SlideTwo = () => {
  return (
    <div className="w-full h-full flex-shrink-0 flex">
      <div className="flex flex-col justify-between flex-1">
        <div className="h-100 md:h-200 w-full bg-[url('/image/slide-2.png')] bg-cover bg-top bg-no-repeat flex flex-col items-center justify-center"></div>
        <div className="pt-6 pb-4 px-4 flex-shrink-0">
          <h1 className="text-4xl font-trap text-center">royalty free</h1>
          <p className="text-center text-xs mt-4 max-w-screen-md mx-auto">
            с layer ты забудешь о необходимости делить прибыль, ведь все наши материалы бесплатны для использования
          </p>
        </div>
        <div className="mt-4 px-10 bg-cover bg-center" style={{ backgroundImage: "url('/image/bg-footer-2.png')" }}>
          <div className="pt-20 pb-14 flex items-center gap-4">
            <p className="text-[5px] text-[#e7e4dd]">All rights reserved. No part of this publication may be reproduced, stored in a retrieval system or transmitted, in any form or by any means, electronic, mechanical, photocopying, recording or otherwise, without permission in writing from the publisher.</p>
            <div className="min-w-5 min-h-5"><Logo/></div>
          </div>
        </div>
      </div>
    </div>
  )
}
