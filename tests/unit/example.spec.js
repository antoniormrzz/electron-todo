import { shallowMount } from '@vue/test-utils'
import Task from '@/components/Task.vue'

describe('Task.vue', () => {
  it('renders task name when passed', () => {
    const task = { id: 1, name: 'task name', desc: 'description', isDone: 1, isSelected: false }
    const wrapper = shallowMount(Task, {
      propsData: { task }
    })
    expect(wrapper.find('div.header__name').text()).toMatch(task.name)
  })
})
