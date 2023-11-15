import React from 'react';
import FBIcons from '../../FBIcons';

const Overview = () => {
  return (
    <div className='py-7 px-4 text-white'>
      <ul className="text-xs text-gray-300 bio-intro font-bold">
          <li>
              <FBIcons icon="workplace" size="20" />
              <span>
                  Work at <span className="text-white">Super Globe Inc.</span> as a <span className='text-white'>Production Helper</span>
              </span>
          </li>
          <li>
              <FBIcons icon="workplace" size="20" />
              <span>
                  Work at <span className="text-white">Lazada</span> as a <span className='text-white'>Packer</span>
              </span>
          </li>
          <li>
              <FBIcons icon="school" />
              <span>
                  Studied at <span className="text-white">Mamatid Senior High School</span>
              </span>
          </li>
          <li>
              <FBIcons icon="school" />
              <span>
                  Studied at <span className="text-white">Kodego BootCamp</span>
              </span>
          </li>
          <li>
              <FBIcons icon="house" />
              <span>
                  Lives in <span className="text-white">Cabuyao, Laguna</span>
              </span>
          </li>
          <li>
              <FBIcons icon="location" />
              <span>
                  From <span className="text-white">Cabuyao, Laguna</span>
              </span>
          </li>
          <li>
              <FBIcons icon="relationHeart" size="20" />
              <span>
                  Single
              </span>
          </li>
      </ul>
    </div>
  )
}

export default Overview