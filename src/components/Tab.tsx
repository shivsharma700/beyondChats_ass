
import { useStore } from '../store/useStore';

const Tab = () => {
  const { tab, setTab, isDark } = useStore();

  return (
    <div data-theme={`${isDark ? 'dracula': 'aqua'}`} role="tablist" className=" font-semibold tabs tabs-bordered z-10 ">
      <a
        role="tab"
        onClick={(e) => setTab(e.currentTarget.textContent || 'All')}
        className={`tab ${tab === 'All' && 'tab-active'} transition duration-200 ease-in-out`}
      >
        All
      </a>
      <a
        role="tab"
        onClick={(e) => setTab(e.currentTarget.textContent || 'Regulars')}
        className={`tab ${tab === 'Regulars' && 'tab-active'} transition duration-200 ease-in-out`}
      >
        Regulars
      </a>
      <a
        role="tab"
        onClick={(e) => setTab(e.currentTarget.textContent || 'Unread')}
        className={`tab ${tab === 'Unread' && 'tab-active'} transition duration-200 ease-in-out`}
      >
        Unread
      </a>
      <a
        role="tab"
        onClick={(e) => setTab(e.currentTarget.textContent || 'Personal')}
        className={`tab ${tab === 'Personal' && 'tab-active'} transition duration-200 ease-in-out`}
      >
        Personal
      </a>
    </div>
  );
}

export default Tab;
