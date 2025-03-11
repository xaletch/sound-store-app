import { InstagramIcon, Logo, TelegramIcon, YouTubeIcon } from "@/shared/icons"

export const Footer = () => {
  return (
    <div className="px-4 bg-cover bg-center" style={{ backgroundImage: "url('/image/footer-mobile-bg.png')" }}>
      <div className="pt-8 pb-2">
        <Logo cl={'w-5 h-5'} />
        <div className="flex items-center justify-between flex-wrap gap-3 mt-5">
          <p className="text-[6px] text-[#e7e4dd] font-medium max-w-[260px]">
            All rights reserved. No part of this publication may be reproduced, stored in a retrieval system or transmitted, in any form or by any means, electronic, mechanical, photocopying, recording or otherwise, without permission in writing from the publisher.
          </p>
          <div className="flex items-center gap-3">
            <TelegramIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
